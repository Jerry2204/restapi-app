'use strict';

module.exports = (app) => {
    let jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilDataMhs);

    app.route('/tampil/:id')
        .get(jsonku.tampilDataMhsId);

    app.route('/tambahMhs')
        .post(jsonku.tambahMhs);
}
