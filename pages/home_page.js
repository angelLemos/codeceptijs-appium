const { I } = inject();

module.exports = {

  button:{
    save: '~salvar',
  },

  fields:{
    code: {android: '~codigo'},
    name: {android: '~aluno'},
    search: {android: '~search'},
  },

  registerStudent(code, name){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
  },

  searchStudent(search, check){
    I.fillField(this.fields.search, search)

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
    })
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },

  scroll() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 300, y: 1100 }
      },
      {
        action: 'moveTo',
        options: { x: 300, y: 250 }
      },
      { action: 'release' }
    ])
  }
  
}
