'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../heading/Heading'
import Input from '../input/Input'
import { toast } from 'react-hot-toast'
import Button from '../button/Button'
import useLoginModal from '@/app/hooks/useLoginModal'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({ defaultValues: { email: '', password: '' } })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios
      .post('/api/login', data)
      .then(() => {
        loginModal.onClose
      })
      .catch((err) => toast.error('something went wrong'))
      .finally(() => setIsLoading(false))
  }

  const signUp = () => {
    loginModal.onClose()
    registerModal.onOpen()
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to back' subTitle='Login to your account' />
      <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
      {/* <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required /> */}
      <Input
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button outline label='Continue with Google' icon={FcGoogle} onClick={() => {}} />
      <Button outline label='Continue with Github' icon={AiFillGithub} onClick={() => {}} />
      <div className='text-neutral-500 text-center mt-4 font-ligh'>
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>Don't have an account</div>
          <div onClick={signUp} className='text-neutral-800 cursor-pointer hover:underline'>
            Register
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Login'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
