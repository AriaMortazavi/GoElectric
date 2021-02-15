import Link from 'next/link';
import Router from "next/router";
import "./index.css";
import Page1 from '../pages/Page1'

const index = () => 
<div>
    <Router>
<Page1 />
</Router>
</div>

export default index;