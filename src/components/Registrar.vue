<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Register</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form
                          ref="form"
                          v-model="valid"
                          lazy-validation
                        >
                          <v-text-field
                            v-model="name"
                            :counter="25"
                            :rules="nameRules"
                            label="Name"
                            required
                          ></v-text-field>

                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                          ></v-text-field>

                          <v-text-field
                            v-model="password"
                            :append-icon="showPassword"
                            :type="show1 ? 'text' : 'password'"
                            :rules="passwordRules"
                            label="Password"
                            @click:append="show1 = !show1"
                            required
                          ></v-text-field>

                          <!-- <v-text-field
                            v-model="confirmPassword"
                            :type="show1 ? 'text' : 'password'"
                            :rules="confirmPasswordRules"
                            label="ConfirmPassword"
                            required
                          ></v-text-field> -->

                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn color="primary" to="/Login">Cancel</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="Register()">Confirm</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
export default {
  name: 'Registrar',
  props: {
    source: String
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    show1: false,
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have 8+ characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ],
    // confirmPassword: '',
    // confirmPasswordRules: [
    //   (v) => !!v || 'Confirmation password is required',
    //   (v) => (this.isConfirmPasswordEqual(v)) || 'Password and Confirmation Password must be equal'
    // ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    Register () {
      if (this.$refs.form.validate()) {
        // metodo para registro
      }
    }
  },
  computed: {
    showPassword () {
      return this.show1 ? 'mdi-eye' : 'mdi-eye-off'
    }
    // isConfirmPasswordEqual (v) {
    //   return v === this.password
    // }

  }
}
</script>
