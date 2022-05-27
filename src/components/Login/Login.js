import { reactive } from '@vue/reactivity';
import router from '@/router';
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { changeKey } from '../../store/render'
import { setLogged } from '../../store/auth'
import { watchEffect } from 'vue';

const loginForm = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka'
})

const apiError = reactive({
  error: false,
  message: ''
})

const rules = () => {
  return {
    email: { required, email },
    password: { required },
  }
}

const v$ = useValidate(rules, loginForm)
watchEffect(() => {
  v$.value.$validate()
})

const setOpen = (isOpen) => {
  apiError.error = isOpen
}


const login = async () => {
  if (v$.value.$error) { return }

  try {
    const data = await axios.post('https://reqres.in/api/login', {
      "email": loginForm.email,
      "password": loginForm.password
    })


    changeKey()
    setLogged()
    router.push('/')
  } catch (error) {
    setOpen(true)
    apiError.message = 'user not found'
  }
}

export {
  loginForm,
  apiError,
  login,
  setOpen,
  v$,
}