---
home: true
heroImage: "/fdfb6638535e6f816e4a7657bc1ed1d6_180x180.awebp"
heroText: 萌萌哒草头将军
bgImage: "/u=2243573419,589412055&fm=253&fmt=auto&app=138&f=JPEG.webp"
bgImageStyle: { height: "100%", boxShadow: "0 15px 18px rgba(0,0,0,0.2)", color: "#fff" }
heroImageStyle:
  {
    maxHeight: "488px",
    display: block,
    borderRadius: "19% 81% 23% 77% / 44% 57% 43% 56%",
    boxShadow: "0 15px 18px rgba(0,0,0,0.2)",
  } 
---

<div id="test" style="text-align: center">
  <img width="70%" src="/mmdctjj.jpg">
  <div>欢迎关注我的微信公众号</div>
</div>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    const container = document.querySelector(`.info-wrapper`)
    const nodes = document.querySelector(`.personal-info-wrapper`)
    container.insertBefore(document.querySelector('#test'), container.children[0])

    document.querySelector('.footer-wrapper').children[0].remove()
  }
}
</script>