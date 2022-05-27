import { ref } from "vue"

const isLogged = ref(false)

const setLogged = (token) => {
  isLogged.value = token
  isLogged.value = true
}

const removeLogg = () => {
  isLogged.value = false
}

export {
  isLogged,
  setLogged,
  removeLogg,
}