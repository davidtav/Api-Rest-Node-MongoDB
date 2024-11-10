import express from "express";
import conectarBanco from "../config/dbConnect.js";
import livro from "../models/Livro.js";

const app = express();
app.use(express.json());

const conexao = await conectarBanco();

app.get("/", (req, res) => {
  res.status(200).send("sabadou !");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});


app.get("/livros/:id", async (req, res) => {
  const livroRetornado = await livro.findById({_id: req.params.id});
  res.status(200).json(livroRetornado);
});

app.post("/livros", async (req, res) => {
  const novoLivro = new livro({
    titulo: req.body.titulo,
    autor: req.body.autor,
  });

  const livroSalvo = await novoLivro.save();
  res.status(201).send(livroSalvo);
});

app.put("/livros/:id", async (req, res) => {
  const livroAtualizado = await livro.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true });

    if (!livroAtualizado) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }
      res.status(200).json(livroAtualizado);
});

app.delete('/livros/:id', async (req, res) => {
    const livroExcluido = await livro.findOneAndDelete(
        {_id: req.params.id});
        
    if (!livroExcluido) {
        res.status(404).send("Livro não encontrado");
    }
    res.status(204).send("Livro excluido com sucesso !");
})




conexao.on("error", (erro) => {
  console.log("Erro ao conectar:", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o mongodb efetuada com sucesso");
});

export default app;
