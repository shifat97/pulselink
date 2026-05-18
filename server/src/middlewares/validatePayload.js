const validatePayload = (schema) => {
  return (req, res, next) => {
    schema.parse(req.body);
    next();
  };
};

export default validatePayload;
