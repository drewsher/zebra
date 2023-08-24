<script>
  const toCamelCase = (string) => {
    if (!string.includes('-')) {
      return string[0].toLowerCase() + string.slice(1);
    }
    return string.replace(/-([a-z])/, (c) => c[1].toUpperCase());
  };

  export default {
    name: 'Wrapper',
    inheritAttrs: false,
    render(h) {
      for (const key in this.$attrs) {
        if (key.includes('-')) {
          this.$attrs[toCamelCase(key)] = this.$attrs[key];
          delete this.$attrs[key];
        }
      }

      return this.$scopedSlots.default(this.$attrs);
    },
  };
</script>
