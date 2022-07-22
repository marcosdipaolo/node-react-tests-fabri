const Head = (props) => {
    return <head>
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="Tooplate" />
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
    />

    <title>ArtFabric - {props.title}</title>

    <link
        rel="stylesheet"
        type="text/css"
        href="/css/bootstrap.min.css"
    />

    <link rel="stylesheet" type="text/css" href="/css/font-awesome.css" />

    <link rel="stylesheet" type="text/css" href="/css/owl-carousel.css" />

    <link rel="stylesheet" href="/css/tooplate-artxibition.css" />
    </head>

};

export default Head;