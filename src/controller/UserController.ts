import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const userService = new UserService();

export class UserController {
    async create(req: Request, res: Response) {
        try {
            const created = await userService.create(req.body);
            return res.status(201).json(created);
        } catch (err) {
            console.error(err);
            return res.status(400).json({ message: "Create failed", error: err });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await userService.findAll();
            return res.json(users);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Fetch failed", error: err });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "ID is required" });
            }

            const user = await userService.findById(id);
            if (!user) {
                return res.status(404).json({ message: "Not found" });
            }

            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Fetch failed", error: err });
        }
    }


    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "ID is required" });
            }
            const updated = await userService.update(id, req.body);
            if (!updated) return res.status(404).json({ message: "Not found or invalid id" });
            return res.json(updated);
        } catch (err) {
            console.error(err);
            return res.status(400).json({ message: "Update failed", error: err });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "ID is required" });
            }
            const deleted = await userService.delete(id);
            if (!deleted) return res.status(404).json({ message: "Not found or invalid id" });
            return res.json({ message: "Deleted" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Delete failed", error: err });
        }
    }
}
