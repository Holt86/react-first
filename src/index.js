import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Components/Calculator/Calculator'
import Slider from './Components/Slider/Slider'
import TodoList from './Components/TodoList/TodoList'
import * as serviceWorker from './serviceWorker';


var images1 = ['https://cdn.oboi7.com/15b629a22e5d427f08af662ff3ca1b5cccfde371/zhivotnye-leopardy.jpg',
      'http://1920x1080hdwallpapers.com/image/201505/food/1485/garnet-delicious-red-berries.jpg'];

var images2 = ['https://images.wallpaperscraft.ru/image/gepard_lezhat_dikaya_koshka_pyatnistyy_1182_1920x1080.jpg',
  'https://images.wallpaperscraft.ru/image/most_kamni_reka_gorod_gorod_na_vode_otrazhenie_58661_1920x1080.jpg'];


ReactDOM.render(<div>
  {/*<Calculator />
  <Slider images = {images1}/>
  <Slider images = {images2}/>*/}
  <TodoList />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
