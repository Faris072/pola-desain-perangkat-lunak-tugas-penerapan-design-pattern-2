import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', () => {
    const currency = ref<'IDR' | 'USD' | 'YEN'>('IDR');

    watch(currency, (newValue, oldValue) => {
        localStorage.setItem('currency', JSON.stringify(currency.value))
    }, { deep: true });

    function init(){
        currency.value = JSON.parse(localStorage.getItem('currency') || '[]');
    }

    function switchCurrency(curr: 'IDR' | 'USD' | 'YEN') {
        currency.value = curr;
    }

  return { currency, switchCurrency, init };
});

export default useCurrencyStore;
