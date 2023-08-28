import Typography from "@mui/material/Typography";

interface LogoProps {
    color?: string,
    fontSize?: string | number,
    flexGrow?: string | number,
    className?: string
    // href?: string,
    // component: React.ElementType<any>,
    // variant?: 'body1' | 'h5'
}

const Logo: React.FunctionComponent<LogoProps> = (props) => {
    return (
        <Typography
            className={props.className}
            sx={{
                textDecoration: 'none',
                flexGrow: props.flexGrow,
                fontFamily: "'Pacifico', cursive",
                fontSize: props.fontSize,
                color: props.color ?? 'white',
                textAlign: 'center'
            }}>
            Domki na mazurach
        </Typography>

        // <Typography
        //     variant={props.variant ?? "h5"}
        //     noWrap
        //     component={props.component}
        //     href={props.href}
        //     sx={{
        //         mr: 2,
        //         display: { xs: 'flex', md: 'none' },
        //         flexGrow: 1,
        //         fontFamily: 'Pacifico',
        //         fontWeight: 400,
        //         letterSpacing: '.3rem',
        //         color: props.color ?? '#fdfdfd',
        //         textDecoration: 'none',
        //     }}
        // >
        //     Domki Barany
        // </Typography>
    );
}

export default Logo;