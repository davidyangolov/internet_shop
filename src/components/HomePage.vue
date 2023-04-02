<template>

<div class="wrapper">

<header>
<nav>
	<ul>
		<li><router-link to="/home">Главная</router-link></li>
		<li><router-link to="/about">О нас</router-link></li>
		<li><router-link to="/contact">Контакты</router-link></li>
		<li><router-link to="/faq">FAQ</router-link></li>
		<li><router-link to="/support">Поддержка</router-link></li>
		<li><router-link to="/rules">Правила магазина</router-link></li>
		<li><router-link to="/shop">Магазин</router-link></li>
	</ul>
</nav>
</header>

<main>

</main>

<footer>


</footer>


</div>
<router-view></router-view>
</template>
<script>
export default {
	name: 'HomePage'
}
</script>

<style scoped>

</style>