import { asyncWrapper } from "../utils/asyncWrapper.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const findAll = asyncWrapper(async (req, res) => {
  const { page, limit, offset } = res.pagination;
  const entries = await req.model.findAndCountAll({
    offset,
    limit,
    order: [["createdAt", "DESC"]],
  });

  const totalCount = entries.count;
  const totalPages = Math.ceil(totalCount / limit);

  const paginationData = {
    totalCount,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };

  res.json({ ...paginationData, results: entries.rows });
})

export const findOneById = asyncWrapper(async (req, res) => {
  const {
    params: { id },
  } = req;
  const entry = await req.model.findByPk(id);
  res.json(entry);
});

export const createOne = asyncWrapper(async (req, res) => {
  const { body } = req;
  const entry = await req.model.create(body);
  res.status(201).json(entry);
});

export const updateOne = asyncWrapper(async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const [updated] = await req.model.update(body, {
    where: { id },
  });

  if (!updated) {
    throw new ErrorResponse("Entry not found", 404);
  }
  const updatedEntry = await req.model.findByPk(id);
  res.json(updatedEntry);
});

export const deleteOne = asyncWrapper(async (req, res) => {
  const {
    params: { id },
  } = req;
  const deleted = await req.model.destroy({
    where: { id },
  });

  if (!deleted) {
    throw new ErrorResponse("Entry not found", 404);
  }
  res.status(204).end();
});
