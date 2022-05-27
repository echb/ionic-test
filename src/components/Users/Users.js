import router from '@/router';
import { ref } from '@vue/reactivity';
import axios from 'axios';
import { removeLogg } from '../../store/auth'

const users = ref([])
const page = ref(1)
const TOTALPAGES = ref(2)

const loadMore = async () => {
  if (page.value > TOTALPAGES.value) {
    return
  }
  const { data } = await axios.get(`https://reqres.in/api/users?page=${page.value}`)
  TOTALPAGES.value = data.total_pages
  users.value = users.value.concat(data.data)
  page.value++
}
const logOutHandle = () => {
  removeLogg()
  router.push('/login')
  // DELAY TO PREVENT UGLY TRANSITION
  setTimeout(() => {
    users.value = []
    page.value = 1
    TOTALPAGES.value = 2
  }, 1000);
}

export {
  loadMore,
  users,
  page,
  TOTALPAGES,
  logOutHandle
}