//* Header component
//* Since: 0.0.0
//* Author: @crdgom
//* Description: Header component, includes a short description of the app.

import './Header.css';

export const Header = () => {
    return (
        <section className='container'>
            <div className="header">
                <h1 className="header-title">site.webmanifest generator</h1>
                <p className="header-description">
                    Hi, with this small (but complete) app you can easily generate the .json code to convert your html code site to a PWA (Progressive Web Application).
                </p>
            </div>
        </section>
    );
};
