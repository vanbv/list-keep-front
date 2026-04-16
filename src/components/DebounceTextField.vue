<template>
  <v-text-field
    :model-value="modelValue"
    v-bind="$attrs"
    @blur="handleBlur"
    @keyup.enter="handleBlur"
    @update:model-value="handleInput"
  />
</template>

<script lang="ts" setup>
  const TIMEOUT_MS = 1000

  const props = defineProps<{
    modelValue: string
    onChange: () => void
  }>()

  const emit = defineEmits<{
    'update:modelValue': [value: string]
  }>()

  const localValue = ref(props.modelValue)
  let changeTimeout: ReturnType<typeof setTimeout>

  let lastChangedValue = ''

  watch(() => props.modelValue, newValue => {
    if (newValue && !lastChangedValue) {
      lastChangedValue = newValue
    }

    localValue.value = newValue
  })

  const changeValue = () => {
    if (localValue.value !== lastChangedValue) {
      props.onChange()
      lastChangedValue = localValue.value
    }
  }

  const handleInput = (value: string) => {
    localValue.value = value
    emit('update:modelValue', value)

    clearTimeout(changeTimeout)
    changeTimeout = setTimeout(changeValue, TIMEOUT_MS)
  }

  const handleBlur = () => {
    clearTimeout(changeTimeout)
    changeValue()
  }
</script>
