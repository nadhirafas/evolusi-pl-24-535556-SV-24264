<script setup>
import { onMounted, ref } from 'vue'

const users = ref([])
const loading = ref(true)
const error = ref('')

const apiUrl = import.meta.env.VITE_API_URL

const getUsers = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/users`)

    if (!response.ok) {
      throw new Error('Gagal mengambil data users')
    }

    users.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <div>
    <h1>Data Users</h1>

    <p v-if="loading">Memuat data...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <p v-else-if="users.length === 0">
      Belum ada data users.
    </p>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>