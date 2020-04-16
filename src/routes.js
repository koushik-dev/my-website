import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import ArticlesPage from './pages/articles-page';
import ContactPage from './pages/contact-page';

const CreateRoutes = () => (
    <BrowserRouter>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/articles" component={ArticlesPage}></Route>
        <Route exact path="/blog"></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
    </BrowserRouter>
)

export default CreateRoutes;
