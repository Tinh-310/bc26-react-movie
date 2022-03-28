# Movie Project

### Structure
- src
  - components:
    - Chứa các common component dùng chung cho toàn bộ ứng dụng: Button, Card, Modal, Input,...
    - Thông thường các component này sẽ không liên quan đến business logic của Project. Eg: Không có side effect, không kết nối tới redux

  - modules: Có thể là 1 chức năng hoặc là 1 page
    - Home: module-name
      - components: Chứa các component chỉ sử dụng trong module, có thể chứa business logic của Project: side effect, redux
      - pages: Chứa các component là 1 page cụ thể
      - actions: Chứa redux actions
      - constatns: Chứa redux action types/ Chứa những biến constants sử dụng trong module
      - reducers: Chứa redux reducers

  - hooks: Chứa các custom hook mình tự viết để sử dụng trong project

  - services/apis:
    - Cấu hình các phương thức gọi API (axios, fetch)
    - Chứa các tác vụ liên quan đến gọi API

  - utils: Chứa các common function của js dùng chung cho ứng dụng
    - array.js: chứa các hàm làm việc với array
    - string.js: chứa các hàm làm việc với string

  - styles: Chứa các file css/scss, nếu dùng css-in-js thì k cần

  - store.js: Setup redux store
  - reducer.js: Setup root reducer
  - globalStyles.js: Setup global styles sử dụng css-in-js


### Library
- Store: redux, react-redux, redux-thunk
- Router: react-router-dom
- UI component: react-bootstrap/material-ui/ant-design/mantine,...
- Style:
  - SCSS: sass
  - CSS-in-JS: styled-component/@emotion










