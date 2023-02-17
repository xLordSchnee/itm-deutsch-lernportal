<template>
    <v-container>
        <div class="card">
            <v-card max-width="750px" class="ma-auto" variant="tonal">
                <v-card-title class="headline">ITM Deutsch Lernportal</v-card-title>

            </v-card>
        </div>
        <div class="form">
            <h1>Ist Deutsch das beste Fach?</h1>
            <form class="deutsch-check">
                <input type="checkbox" id="Ja1" name="Ja" value="Ja">
                <label for="Ja1"> Ja</label><br>
                <input type="checkbox" id="Ja2" name="Ja natürlich" value="Ja natürlich">
                <label for="Ja2"> Ja natürlich</label><br>
                <input type="checkbox" id="Ja3" name="JA!!!" value="JA!!!">
                <label for="Ja3"> JA!!!</label><br><br>
                <input type="submit" value="Submit">
            </form>
        </div>

        <div class="info">
          <img class="bubble" src="~/public/assets/Gedankenblase.png">
           <p class="text-rick">
             Willkommen im besten Deutschlernportal der Welt!
             Hier kannst du alles über Deutsch lernen.
             Viel Spaß dabei!
           </p>
          <img class="rick" src="~/public/assets/Rick.png">

        </div>

    </v-container>
</template>

<script>
export default {
    name: 'Index'
}
</script>

<style>

</style>
