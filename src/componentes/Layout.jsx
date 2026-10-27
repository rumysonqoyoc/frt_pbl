import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import ham from './ham.svg';
import hom from './hom.svg';

import './Layout.css'

export const Layout = () => {
    const [isOpen, setIsOpen]=useState(false)
    const cambio=()=>setIsOpen(!isOpen)
  return (
    <div className="app-container">
        <nav className='navbar'>
            <button className='menu-btn' onClick={cambio}> <img src={ham} width={50}/> </button>
            <div className='navbar-logo'><h2>Poblacion 2026</h2></div>
            <div className='navbar-items'>
                <NavLink to='/'><img src={hom} width={50}/></NavLink>
            </div>
        </nav>
        <div className='contenido-principal'>
            <aside className={`sidebar ${isOpen ? 'open':''}`}>
                <div className='opt'>
                    <h3>Opciones</h3>
                </div>
                <nav className='menu'>
                    <NavLink to='/' className={({isActive})=>(isActive ? 'nav-link active':'nav-link normal')}>Inicio</NavLink>
                    <NavLink to='/provincia' className={({isActive})=>(isActive ? 'nav-link active':'nav-link normal')}>Por provincia</NavLink>
                    <NavLink to='/distrito' className={({isActive})=>(isActive ? 'nav-link active':'nav-link normal')}>Por distrito</NavLink>
                    <NavLink to='/red' className={({isActive})=>(isActive ? 'nav-link active':'nav-link normal')}>Por Red</NavLink>
                    <NavLink to='/micro_red' className={({isActive})=>(isActive ? 'nav-link active':'nav-link normal')}>Por Micro Red</NavLink>
                    <NavLink to='/eess' className={({isActive})=>(isActive ? 'nav-link active':'nav-link normal')}>Por Establecimiento</NavLink>
                </nav>
            </aside>

            <main className="contenido-dinamico">
                <Outlet/>
            </main>
        </div>
    </div>
  )
}
