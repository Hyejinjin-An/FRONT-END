import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MyComponent2, { Child, Child2, Child3, MyComponent } from '../src/react_study/ex01_basic/ex01_component'
import UseStateEx from './react_study/ex02_useState/ex01_basic'
import Test, { DefaultValue, Param, SetTitle, SimpleTest } from './react_study/ex00_practice/20260318'
import TitleList from './react_study/ex02_useState/ex03_map'
import FlexEx from './react_study/ex02_useState/ex05_flex'
import ObjectEx from './react_study/ex02_useState/ex06_object'
import Filter from './react_study/ex02_useState/ex07_filter'
import AddRemove from './react_study/ex02_useState/ex08_prev'
import UseStateArr from './react_study/ex02_useState/ex04_arr'
import AddRemoveUseEffect from './react_study/ex04_useRef/ex01_useRef'
import Timer, { EffectTimer } from './react_study/ex03_useEffect/ex02_Timer'
import TodoList from './react_study/ex00_practice/ToDoList_안혜진'
import TestContext from './react_study/ex05_useContext/ex01_noContextBasic'
import LangComp from './react_study/ex05_useContext/ex03_language'
import MyApp from './react_study/ex05_useContext/ex05_useContext'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { ColorModeButton } from './components/ui/color-mode'
import Layout from "./components/Layout"
import About from "./pages/About"
import Ex01_Box from './react_study/ex11_chakraUI/Ex01_box'
import Ex02_Stack from './react_study/ex11_chakraUI/Ex02_Stack'
import PokemonDetails from './pages/PokemonDetails'
import { Route, Routes } from 'react-router-dom'
import PokemonCards from './pages/PokemonCards'

function App() 
{
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<PokemonCards/>} />
        <Route path="about" element={<About/>} />
        <Route path="pokemon/:id" element={<PokemonDetails/>} />

      </Route>
    </Routes>
     
    // <Box p={6}>
    //     <HStack justify={'space-between'}>
    //       <Heading size='3xl' mb={2}>Hello, Chakra</Heading>
    //       <ColorModeButton />
    //     </HStack>
    //     <Ex01_Box />
    //     <Ex02_Stack />
    // </Box>
  )
    {/* <UseStateEx /> */}
    {/* <TitleList /> */}
    {/* <FlexEx /> */}
    {/* <ObjectEx /> */}

    {/* <Filter /> */}
    {/* <AddRemove /> */}
    {/* <UseStateArr /> */}
    {/* <AddRemoveUseEffect /> */}
    {/* <Timer /> */}
    {/* <TodoList /> */}

    {/* <AddRemoveUseEffect /> */}
    {/* <TestContext /> */}
    {/* <LangComp /> */}
    {/* <MyApp /> */}

    {/* <PokemonCard id={1}/> */}
}

export default App
