import { pxtorem } from '../../utils/size'


export default {


    title: {
        fontFamily: 'oswald',
        fontWeight: 500,
        fontSize: pxtorem(40),
    },

    registrationTitle: {
        fontFamily: 'oswald',
        fontWeight: 500,
        fontSize: pxtorem(24),
        width: '60%'
    },

    description: {
        fontFamily: 'nunito',
        fontWeight: 400,
        fontSize: pxtorem(16),
        lineHeight: '30px'
    },


    txtContainer: {
        // padding: '31px',
        padding: '0 5%',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
        marginLeft: '10px'

    },

    btn: {
        backgroundColor: '#FFEE7A',
        width: '242px',
        height: '40px',
        border: '0px',
        padding: '8px 16px 8px 16px',
        boxShadow: '0px 16px 32px rgb(209 182 0 / 25%)'
    },

    btnTxt: {
        fontFamily: 'nunito',
        fontWeight: 800,
        fontSize: '14px',
        letterSpacing: ' 0.04em'
    },



    formContainer: {
        padding: ' 2rem 1.75rem',
        backgroundColor: '#242424',
        borderRadius: '16px',
        margin: '8px'
    },

    footer: {
        padding: ' 2rem 1.75rem',
        backgroundColor: '#242424',
        marginTop: '15%',

    },

    footerTxt: {
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: 400,
        margin: '0 3%'
    },

    'footer > div': {
        padding: '2rem 1.75rem',
    },
    space: {
        margin: '10px 0',
        alignItems: 'center',
        display: 'flex'
    }

    ,
    socialMedia: {
        fontFamily: 'oswald',
        fontWeight: 700,
        fontSize: '1rem',
        color: '#FFEE7A'
    },

    gridStyle: ({
        // padding: '0 8%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
        marginLeft: '10px',
    }),




    registrationForm: {
        padding: '15%',
        // Adding media querry..
        "@media (min-width: 300px)": {
            display: 'none',
            backgroundColor: 'red'
        },
        '@media (max-width: 300px)': {
            backgroundColor: 'red'
        },
    }





}