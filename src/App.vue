<template>
  <div id="app">
    <header>
      <h1>Botépée &ndash; Der Fechtroboter</h1>
      <nav>
        <router-link to="/">Startseite</router-link> |
        <router-link to="/team">Team</router-link> |
        <router-link to="/kontakt">Kontakt</router-link> |
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/feedback">Feedback</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 Botépée Projektteam</p>
    </footer>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  color: #333;
}
#app {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #0077cc;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
header, footer {
  text-align: center;
  margin-bottom: 20px;
}
</style>