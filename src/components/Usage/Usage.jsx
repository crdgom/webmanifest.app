//* Usage component
//* Since: 0.0.0
//* Author: @crdgom
//* Description: Usage describes to the user what a pwa is and how it is used in our application.

import './Usage.css'

export const Usage = () => {
    return (
        <section className='container'>
            <div className="usage">
                <h2 className="usage-title">What is a <abbr title="Progressive Web Application">PWA</abbr> (Progressive Web Application)?</h2>
                <p className="usage-description">
                A Progressive Web Application (<abbr title="Progressive Web Application">PWA</abbr>) 
                is a type of web application that uses 
                modern web technologies to offer a user 
                experience similar to that of a native 
                application. PWA&apos;s combine the best of web 
                apps and mobile apps, offering features 
                such as offline operation, push notifications 
                and a fast and seamless user experience. 
                These apps are developed using standard 
                technologies such as <abbr title="Hyper Text Markup Language">HTML</abbr>, <abbr title="Cascade Style Sheet">CSS</abbr> and JavaScript, 
                and are deployed via the web, but can be 
                installed on the users device like a native app. 
                </p>
                <h3 className="usage-subtitle">Benefits of a PWA</h3>
                <p className="usage-description">
                    <u className='description-numbered-list'>
                        <li className="description-list-item">
                            <strong>Enhanced User Experience:</strong> PWA&apos;s are designed to be fast 
                            and responsive, providing a smooth and native-like 
                            user experience. This translates to quicker load times 
                            and seamless transitions.
                        </li>
                        <li className="description-list-item">
                        <strong>Offline Access:</strong> Thanks to the use of Service Workers, 
                        PWA&apos;s can function offline. This means users can access 
                        the application and use many of its features even when 
                        they don&apos;t have an active internet connection
                        </li>
                        <li className="description-list-item">
                        <strong>Push Notifications:</strong> PWA&apos;s can send push notifications to 
                        users, allowing for direct and real-time communication. 
                        This is particularly useful for keeping users informed 
                        about updates, offers, or reminders.
                        </li>
                        <li className="description-list-item">
                        <strong>Easy Installation:</strong> Unlike native apps, PWA&apos;s do not require 
                        going through an app store for installation. Users can 
                        simply add the PWA to their home screen from their 
                        browser, eliminating the friction of downloading and 
                        installing.
                        </li>
                        <li className="description-list-item">
                        <strong>Space and Resource Savings:</strong> PWA&apos;s are typically lighter 
                        than native apps, taking up less space on the users 
                        device. Additionally, they do not require frequent 
                        updates from an app store, as they are always up-to-date 
                        with the latest version each time the user opens them.
                        </li>
                        <li className="description-list-item">
                        <strong>Improved <abbr title="Search Engine Optimization">SEO</abbr> and Accessibility:</strong> Being web-based, PWAs 
                        are indexable by search engines, enhancing their 
                        visibility and accessibility on the web.
                        </li>
                    </u>
                </p>
                <h3 className="usage-subtitle">Capabilities of a PWA</h3>
                <p className="usage-description">
                    <u className='description-numbered-list'>
                        <li className="description-list-item">
                            <strong>Cross-Platform:</strong> PWA&apos;s work on any device with a compatible browser, whether it&apos;s a desktop, smartphone, or tablet, without the need for platform-specific development.
                        </li>
                        <li className="description-list-item">
                        <strong>Operating System Integration:</strong> Thanks to the use of Service Workers, 
                        PWA&apos;s can function offline. This means users can access 
                        the application and use many of its features even when 
                        they don&apos;t have an active internet connection
                        </li>
                        <li className="description-list-item">
                        <strong>Silent Updates:</strong> Content and functionality updates are managed silently and automatically in the background, ensuring users always have the latest version without manual intervention.
                        </li>
                        <li className="description-list-item">
                        <strong>Security:</strong> PWA&apos;s are served over HTTPS, ensuring secure data transfer and protection against man-in-the-middle attacks.
                        </li>
                    </u>
                </p>
                <h4 className='conclusion-title'>Conclusion</h4>
                <p className='conclusion-description'>Progressive Web Applications represent a significant evolution in the way web applications are 
                    developed and delivered to users. They combine the best aspects of native and web applications, 
                    offering superior user experience, better performance, and advanced capabilities without the 
                    traditional drawbacks of native apps. This makes them an attractive option for both developers 
                    and users, marking a step forward in the evolution of mobile and web applications.
                </p>
            </div>
        </section>
    )
};
