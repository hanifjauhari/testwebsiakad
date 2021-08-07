describe('Test Login Pada SIAKAD', () => {
  it('Membuka halaman', () => {
    cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
  //   cy.get('#form_login > div.form-actions > button').click()
  })

  it('login dengan nama pengguna salah dan kata sandi salah', () => {
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#username').type('iniusername')
      cy.get('#password').type('inipassword')
      cy.get('#form_login > div.form-actions > button').click()
      cy.contains('Username / Password Salah')
    })


    it('login dengan nama pengguna benar dan kata sandi salah', () => {
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#username').type('1831710179')
      cy.get('#password').type('1234567')
      cy.get('#form_login > div.form-actions > button').click()
      cy.contains('Username / Password Salah')
    })

    it('login dengan nama pengguna salah dan kata sandi benar', () => {
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#username').type('hanif')
      cy.get('#password').type('jauhari')
      cy.get('#form_login > div.form-actions > button').click()
      cy.contains('Username / Password Salah')
    })

    it('login dengan nama pengguna kosong dan kata sandi kosong', () => {
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#form_login > div.form-actions > button').click()
      cy.contains('Username harus diisi')
    })


    it('login dengan nama pengguna kosong dan kata sandi terisi', () => {
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#password').type('jauhari')
      cy.get('#form_login > div.form-actions > button').click()
      cy.contains('Username harus diisi')
    })

    it('login dengan nama pengguna terisi dan kata sandi kosong', () => {
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#username').type('1831710179')
      cy.get('#form_login > div.form-actions > button').click()
      cy.contains('Password harus diisi')
    })

    it('login dengan nama pengguna benar dan kata sandi benar', () => {
      cy.viewport(1280, 800)
      cy.visit('http://siakad.polinema.ac.id') 
      cy.get('#username').type('1831710179')
      cy.get('#password').type('431748')
      cy.get('#chk_tampilkan').click()
      cy.get('#form_login > div.form-actions > button').click()

    })









})