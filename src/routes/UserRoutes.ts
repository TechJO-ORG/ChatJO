import { Router } from "express";
import {UserController} from "../controller/UserController";

const router = Router();
const controller = new UserController();

/**
 * @openapi
 * components:
 *   schemas:
 *     AuditLogItem:
 *       type: object
 *       required:
 *         - createdat
 *         - lastseen
 *       properties:
 *         createdat:
 *           type: string
 *         lastseen:
 *           type: string
 *
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - groups
 *         - hastoken
 *         - password
 *         - phone
 *         - profilePic
 *         - status
 *         - username
 *         - auditlog
 *       properties:
 *         _id:
 *           type: string
 *         auditlog:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AuditLogItem'
 *         email:
 *           type: string
 *         groups:
 *           type: array
 *           items:
 *             type: string
 *         hastoken:
 *           type: boolean
 *         password:
 *           type: string
 *         phone:
 *           type: string
 *         profilePic:
 *           type: string
 *         status:
 *           type: string
 *         Token:
 *           nullable: true
 *         username:
 *           type: string
 */

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: created
 */
router.post("/", (req, res) => controller.create(req, res));

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: list
 */
router.get("/", (req, res) => controller.getAll(req, res));

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: single user
 */
router.get("/:id", (req, res) => controller.getById(req, res));

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: updated
 */
router.put("/:id", (req, res) => controller.update(req, res));

/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: deleted
 */
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
