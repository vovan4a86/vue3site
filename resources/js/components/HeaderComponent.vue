<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Simple header</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="/features" class="nav-link">Features</a></li>
                <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="/album" class="nav-link">Album</a></li>
                <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
<!--                https://laravel.demiart.ru/detecting-active-links-in-menu/-->
<!--                https://si-dev.com/ru/blog/how-to-create-blade-directives-->
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent.vue",
    data() {
        return {
            cls: 'nav-link active'
        }
    }
}
</script>

<style scoped>

</style>
