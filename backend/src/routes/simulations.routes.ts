import { Router } from 'express';
import SimulationService from '../services/CreateSimulationService';

const simulationsRouter = Router();

interface Simulation {
  simulation: [number];
}

simulationsRouter.post('/', async (request, response) => {
  const { origin, destination, package_name, time } = request.body;

  const simulation = new SimulationService();

  const { withPlan, withoutPlan } = await simulation.execute({
    origin,
    destination,
    package_name,
    time,
  });

  return response.json({ withPlan, withoutPlan });
});

export default simulationsRouter;
