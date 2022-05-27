import { ref } from '@vue/reactivity';

const componentKey = ref(0)

const changeKey = () => {
  componentKey.value++
}

export {
  componentKey,
  changeKey,
}