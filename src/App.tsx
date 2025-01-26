import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Stopwatch from './pages/stopwatch';
import NotFound from './pages/not-found';

import { version } from '../package.json';
import {Award} from "lucide-react";
import {SiteHeader} from "@/components/site-header.tsx";

const AppContent = () => {
    return <>
        <SiteHeader logo={<Award color="red"/>} appName="Timer de l'apocalypse" version={version} />
        <Routes>
            <Route path="/" element={<Stopwatch/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;