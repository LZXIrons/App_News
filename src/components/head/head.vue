<template>
    <header class="head_f">
        <slot name="head_home"></slot>
        <slot name="search"></slot>
        <slot name="article"></slot>
        <slot name="form"></slot>
        <slot name="video"></slot>
    </header>
</template>

<script>
export default {
    name: 'name'

}
</script>

<style>
.head_f{
    position: fixed;
    width: 100%;
    max-width: 1080px;
    z-index: 999;
    top:0;
    -webkit-transform: translateZ(0);
}
</style>