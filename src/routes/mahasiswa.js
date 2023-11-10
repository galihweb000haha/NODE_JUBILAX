const router = require('express').Router();
const { mahasiswa } = require('../controllers');

router.get('/mahasiswa', mahasiswa.getDataMahasiswa);
router.get('/mahasiswa/:id', mahasiswa.getDataMahasiswaByID);
router.post('/mahasiswa/add', mahasiswa.addDataMahasiswa);
router.post('/mahasiswa/edit', mahasiswa.editDataMahasiswa);
router.post('/mahasiswa/delete', mahasiswa.deleteDataMahasiswa);

module.exports = router;