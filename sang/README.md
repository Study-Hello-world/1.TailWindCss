## tailwind Code Editor 설정

# Tailwind CSS IntelliSense 익스텐션

- 테일윈드 공식 익스텐션을 사용하면 자동 완성, 클래스명 호버 시 해당 클래스 명의 대한 클래스 속성 확인, 린팅 등의 기능을 제공하여 좀 더 편리하게 코드를 작성할 수 있다.

# Prettier 플러그인

- 테일윈드 공식 prettier 플러그인을 사용하면 권장 순서에 따라 클래스를 자동 정렬할 수 있다.

```sh
npm install -D prettier-plugin-tailwindcss
```

```json
// .prettierrc.json
{
  // 생략
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

# Custom Styles

- 커스텀 테마

- 테일윈드는 다양한 색상과 px을 지원하고 있다. 하지만 프로젝트를 진행하다 보면 해당 컨셉에 맞는 디자인 가이드가 정해져 여러 컴포넌트에서 필요한 경우가 있다. 이럴 때 tailwind.config.js의 theme에 추가하여 사용할 수 있다. theme.extend.colors가 아닌 theme.colors에 추가하게 되면 기존 색상을 덮어쓰게 된다.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#ffc107",
        secondary: "#2979ff",
        success: "00c07f",
        failure: "ff6562",
      },
      fontSize: {
        "15px": "15px",
      },
    },
  },
};
```

```html
<button type="button" className="rounded-md bg-primary text-15px">
  로그인
</button>
```

# 임의의 값 사용

- 한번 사용하는 색상이 있는데 해당 색상은 테일윈드 팔레트에서 지원하지 않는다. 또한 특정 px을 한 번씩 사용해야 하는데 해당 px을 지원하지 않아 theme에 추가하는 건 별로 좋지 않은 생각 같다. 이럴 땐 다음과 같이 사용할 수 있다.

```html
<button type="button" className="rounded-[50px] bg-[#702ddc] text-[15px]">
  로그인
</button>
```
