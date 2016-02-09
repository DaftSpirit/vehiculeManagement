package fr.uha.ensisa.vehiculeManagement.controller;


import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.uha.ensisa.vehiculeManagement.model.Vehicule;

@RestController
public class VehiculeController {

	private Map<String, Vehicule> vehicules = new HashMap<String, Vehicule>();	
	
	public VehiculeController(){
		vehicules.put("dani-bike", new Vehicule("dani-bike", "bike"));
		vehicules.put("cyp-car", new Vehicule("cyp-car", "car"));
		vehicules.put("paul-moto", new Vehicule("paul-moto", "moto"));
	}
	
	@RequestMapping(value="/vehicules")
	public Collection<Vehicule> vehiculeList(){
		return vehicules.values();
	}
	
	@RequestMapping(value="/edit/{name}", method=RequestMethod.POST)
	public void replaceVehicule(@ModelAttribute Vehicule vehicule, @PathVariable("name") String name){
		vehicules.remove(name);
		vehicules.put(name, vehicule);
	}
	
	@RequestMapping(value="/edit/{vehiculeName}")
	public Vehicule getVehicule(@PathVariable("vehiculeName") String vehiculeName){
		return vehicules.get(vehiculeName);
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public void addVehicule(@ModelAttribute Vehicule vehicule){
		vehicules.put(vehicule.getName(), vehicule);
	}
	
	@RequestMapping(value="/vehicules", method=RequestMethod.DELETE)
	public void deleteVehicule(@PathVariable("name") String name){
		vehicules.remove(name);
	}
	
	
	
}
