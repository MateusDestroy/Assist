import db from './db.js';
import express from 'express'
import cors from 'cors'
import crypto from 'crypto-js'
const app = express();
app.use(cors());
app.use(express.json());

app.post('/cadastro',async (req,resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infob_hdm_cadastro.findOne({ where: { nm_HDM_email: usuParam.email } });
        if (u != null)
            return resp.send({ erro: 'Usuário já existe!' });
        
        let r = await db.infob_hdm_cadastro.create({
            nm_HDM_nome: usuParam.nome,
            nm_HDM_sobrenome: usuParam.sobrenome,
            dt_HDM_data_nascimento: usuParam.data,
            nr_HDM_celular: usuParam.celular,
            nm_HDM_email: usuParam.email,
            nm_HDM_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)

        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.get('/cadastro', async (req, resp) => {
    try {
        let usuarios = await db.infob_hdm_cadastro.findAll();
        resp.send(usuarios);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.post('/login', async (req, resp) => {
    const email = req.body.email;
    const senha = req.body.senha;

    const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64)

    let r = await db.infob_hdm_login.findAll(
        {
            where: {
                   nr_senha: cryptoSenha
            },
        raw: true 
        })

        
    if (r == null)
        return resp.send({ erro: e.toString()});

    resp.sendStatus(200);
});

app.get('/login', async (req, resp) => {
    try {
        let login = await db.infob_hdm_login.findAll();
        resp.send(login);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.post('/cadastroadm', async (req, resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infob_hdm_admin.findOne({ where: { nm_HDM_nome_adm: usuParam.email } });
        if (u != null)
            return resp.send({ erro: 'Usuário já existe!' });
        
        let r = await db.infob_hdm_cadastro.create({
            nm_HDM_nome: usuParam.nome,
            nm_HDM_sobrenome: usuParam.sobrenome,
            dt_HDM_data_nascimento: usuParam.data,
            nr_HDM_celular: usuParam.celular,
            nm_HDM_email: usuParam.email,
            nm_HDM_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)

        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))