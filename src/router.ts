import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import path from "path";

const prisma = new PrismaClient();

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).send("Route home");
});

router.get("/api", (req, res) => {
  return res.status(200).send("Route api");
});

router.get("/web", (req, res) => {
  console.log(__dirname);
  return res
    .status(200)
    .sendFile(path.join(__dirname, "/public", "index.html"));
});

router.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.status(200).json(users);
});

router.post("/api/users", async (req, res) => {
  const userData = req.body;
  const user = await prisma.user.create({
    data: userData,
  });
  return res.status(200).json(user);
});

router.get("/api/users/:username", async (req, res) => {
  const { username } = req.params;
  const user = await prisma.user.findUnique({
    where: { username },
  });
  return res.status(200).send(user);
});

export default router;
