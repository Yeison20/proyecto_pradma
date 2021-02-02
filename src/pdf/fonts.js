module.exports = {
    Roboto: {
        normal: Buffer.from(
            requiere("pdfmake/build/vfs_fonts.js").pdfMake.vfs["Roboto-Regular.ttf"],
            "base64"
        ),
        bold: Buffer.from(
            requiere("pdfmake/build/vfs_fonts.js").pdfMake.vfs["Roboto-medium.ttf"],
            "base64"
        ),
    },
};