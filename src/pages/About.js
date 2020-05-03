import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    
    const center = {
        textAlign: 'center'
    }

    return ( 
        <Layout>
            <div style={center}>
                <h1>About</h1>
                <p>This is the About Page.</p>
            </div>
        </Layout>
     );
}
 
export default About;