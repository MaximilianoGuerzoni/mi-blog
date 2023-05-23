import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Header } from "../components/layouts/Header";
import { Nav } from "../components/layouts/Nav";
import { SideBar } from "../components/layouts/SideBar";
import { Footer } from "../components/layouts/Footer";
import { Crear } from "../components/pages/Crear";
import { Busqueda } from "../components/pages/Busqueda";
import {Articulo} from "../components/pages/Articulo"
import {Editar} from "../components/pages/Editar"

export const Rutas = ()=>{
    return(
        <BrowserRouter>
        {/* crear layaut */}
        <Header></Header>
        <Nav></Nav>
        <SideBar></SideBar>
        <Footer></Footer>

        {/* Crear contenido centrar y rutas */}
        <section id="content" className="content">
            <Routes>
                <Route path="/"element={<Inicio/>}>Inicio</Route>
                <Route path="/inicio"element={<Inicio/>}>Inicio</Route>
                <Route path="/articulos"element={<Articulos/>}>Articulos</Route>
                <Route path="/crear-articulos"element={<Crear/>}>Crear</Route>
                <Route path="/buscar/:busqueda"element={<Busqueda/>}>Crear</Route>
                <Route path="/articulo/:id"element={<Articulo/>}>Crear</Route>
                <Route path="/editar/:id"element={<Editar/>}>Crear</Route>
                <Route path="*"element={
                    <div className="jumbo">
                        <h1>Error 404</h1>
                    </div>
                  
                }/>
            </Routes>
        </section>
        
        
        </BrowserRouter>

    )
}