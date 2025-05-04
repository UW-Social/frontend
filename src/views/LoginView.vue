<script lang="ts" setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

const toast = useToast();

function handleLogin() {
  if (!username.value || !password.value) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields', life: 3000 });
    return;
  }
  console.log('Login button clicked with username:', username.value);
}

const username = ref('');
const password = ref('');
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText v-model="username" placeholder="Username" />
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-lock"></i>
      </InputGroupAddon>
      <Password v-model="password" placeholder="Password" :feedback="false" />
    </InputGroup>
    <Button label="Login" class="login-button" @click="handleLogin" />
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
