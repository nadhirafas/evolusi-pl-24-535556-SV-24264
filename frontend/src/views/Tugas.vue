<script setup>
import { onMounted, ref } from 'vue'

const tugas = ref([])
const loading = ref(true)
const error = ref('')

const apiUrl = import.meta.env.VITE_API_URL

const getTugas = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/tugas`)

    if (!response.ok) {
      throw new Error('Gagal mengambil data tugas')
    }

    tugas.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getTugas()
})
</script>

<template>
  <div>
    <h1>Data Tugas</h1>

    <p v-if="loading">Memuat data...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <p v-else-if="tugas.length === 0">
      Belum ada data tugas.
    </p>

    <ul v-else>
      <li v-for="item in tugas" :key="item.id">
        {{ item.nama }} - {{ item.deskripsi }}
      </li>
    </ul>
  </div>
</template>