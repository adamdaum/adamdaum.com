import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import {
    Container,
    Grid,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
} from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SocialIcons from "./SocialIcons";
import { Emoji } from "emoji-mart";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile, activeItem }) => (
    <>
        {activeItem === "projects" ? (
            <Container text>
                <LoginForm />
            </Container>) : (
            <Container text>
                <Header
                    as="h1"
                    color="purple"
                    content="Adam Daum"
                    inverted
                    style={{
                        fontSize: mobile ? "2em" : "4em",
                        fontWeight: "normal",
                        marginBottom: 0,
                        marginTop: mobile ? "1.5em" : "3em",
                    }}
                />
                <Header
                    as="h2"
                    color="yellow"
                    inverted
                    style={{
                        fontSize: mobile ? "1.5em" : "1.7em",
                        fontWeight: "normal",
                        marginTop: mobile ? "0.5em" : "1.5em",
                    }}
                >
                    I'm a software architect. Skater. Surfer. #1 Dad. I like to make apps that are fun, fast, look cool, and are easy to use.

                    <div style={{ paddingTop: '30px' }} />
                    <Header.Subheader>
                        This site is an <a href="https://azure.microsoft.com/en-us/products/app-service/static">Azure Static Web App</a>, made with <a href="https://react.dev/">React</a>, <a href="https://vitejs.dev/">Vite</a>, and <a href="https://react.semantic-ui.com/">React Semantic UI</a>.
                    </Header.Subheader>

                    <div style={{ paddingTop: '30px' }} />
                    <Header.Subheader>
                        ...and I'm not gonna lie, a little bit of <a href="https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/models#gpt-35">Open AI</a><span style={{fontSize: mobile ? '1em' : '3em'}}>&nbsp;🤷&nbsp;😁</span>
                    </Header.Subheader>
                </Header>
                <div style={{marginTop: '40px'}}>
                    <SocialIcons />
                </div>
            </Container>

        )}

    </>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

const DesktopContainer = ({ activeItem, handleItemClick, children }) => {
    const [fixed, setFixed] = useState(false);

    const toggleFixedMenu = (inView) => setFixed(!inView);

    return (
        <Media greaterThan="mobile">
            <InView onChange={toggleFixedMenu}>
                <Segment
                    inverted
                    textAlign="center"
                    style={{ height: '100vh', padding: "1em 0em" }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? "top" : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size="large"
                    >
                        <Container>
                            <Menu.Item
                                position="left" as="a" color="yellow" href='/'>
                                ADAM C DAUM
                            </Menu.Item>
                            <Menu.Item
                                name="home"
                                active={activeItem === 'home'}
                                onClick={handleItemClick}
                                position="right" as="a">
                                home
                            </Menu.Item>

                            <Menu.Item
                                name="projects"
                                active={activeItem === 'projects'}
                                onClick={handleItemClick}
                                as="a">projects</Menu.Item>
                        </Container>
                    </Menu>
                    <HomepageHeading activeItem={activeItem} />
                </Segment>
            </InView>

            {children}
        </Media>
    );
};

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

const MobileContainer = ({ activeItem, handleItemClick, children }) => {

    const [sidebarOpened, setSidebarOpened] = useState(false);

    const handleSidebarHide = () => setSidebarOpened(false);

    const handleToggle = () => setSidebarOpened(true);

    return (
        <Media as={Sidebar.Pushable} at="mobile">
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    inverted
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item
                        name="home"
                        active={activeItem === 'home'}
                        onClick={handleItemClick}
                        position="right" as="a">
                        home
                    </Menu.Item>

                    <Menu.Item
                        name="projects"
                        active={activeItem === 'projects'}
                        onClick={handleItemClick}
                        as="a">projects
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign="center"
                        style={{ height: '100vh', minHeight: 350, padding: "1em 0em" }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size="large">
                                <Menu.Item onClick={handleToggle}>
                                    <Icon name="sidebar" />
                                </Menu.Item>
                                <Menu.Item position="right">

                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading activeItem={activeItem} handleItemClick={handleItemClick} mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    );
};

const ResponsiveContainer = ({ activeItem, handleItemClick, children }) => {

    return (
        (
            <MediaContextProvider>
                <DesktopContainer
                    activeItem={activeItem}
                    handleItemClick={handleItemClick}
                >{children}</DesktopContainer>
                <MobileContainer
                    activeItem={activeItem}
                    handleItemClick={handleItemClick}
                >{children}</MobileContainer>
            </MediaContextProvider>

        )

    )
};


const Home = () => {

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (

        <ResponsiveContainer
            activeItem={activeItem}
            handleItemClick={handleItemClick}>

        </ResponsiveContainer>

    )
}

export default Home;