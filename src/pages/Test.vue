<template>
  <div class="page has-navbar" v-nav="{title: '对话框', showBackButton: true}">
    <div class="page-content padding-top">

      <item class="item-icon-right" @click.native="showAlert()">
        Alert <span class="item-note">提示框</span>
        <i class="icon ion-ios-arrow-right"></i>
      </item>


    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showAlert (effect) {
        window.$dialog.alert({
          content: 'Hello!',
          okTheme: 'positive',
          effect: effect || 'default'
        }).then(() => {
          console.log('alert hide.')
        })

        // setTimeout(window.$dialog.hide, 2000)
      },

      showConfirm () {
        window.$dialog.confirm({
          content: '在"微信"中打开链接吗?',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

      showAlertIOS () {
        window.$dialog.alert({
          theme: 'ios',
          title: '无法打开网页',
          content: 'Safari打不开网页，因为网址无效。',
          okText: '好'
        }).then(() => {
          console.log('alert hide.')
        })
      },

      showConfirmIOS () {
        window.$dialog.confirm({
          theme: 'ios',
          title: '在"微信"中打开链接吗?',
          cancelText: '取消',
          okText: '打开'
        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },

      multiMode () {
        let options = {
          theme: 'ios',
          title: '测试',
          okText: '好'
        }

        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            options.content = `第${i + 1}条消息`
            window.$dialog.alert(options)
          }, 500 * i)
        }
      }
    }
  }
</script>
