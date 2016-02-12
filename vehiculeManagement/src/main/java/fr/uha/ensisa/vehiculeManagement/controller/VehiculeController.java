package fr.uha.ensisa.vehiculeManagement.controller;


import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
		System.out.println("get all vehicules");
		return vehicules.values();
	}
	
	@RequestMapping(value="/edit", method=RequestMethod.POST)
	public void replaceVehicule(HttpServletRequest request){
		String oldName = request.getParameter("oldName");
		String name = request.getParameter("name");
		String type = request.getParameter("type");
		
		vehicules.remove(oldName);
		vehicules.put(name, new Vehicule(name, type));
		System.out.println("vehicule edited : " + "new : " +  name + " " + type + "old : " + oldName);
	}
	
	@RequestMapping(value="/edit")
	public Vehicule getVehicule(@PathVariable("vehiculeName") String vehiculeName){
		System.out.println("get" + vehiculeName);
		return vehicules.get(vehiculeName);
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public void addVehicule(@RequestBody Collection<Vehicule> vehicules){
		Vehicule vehicule = ((Map<String, Vehicule>) vehicules).get(0);
		String name = vehicule.getName();
		String type = vehicule.getType();
		this.vehicules.put(name, vehicule);
		System.out.println("vehicule added : " + name + " " + type);
	}
	
	
	@RequestMapping(value="/vehicules", method=RequestMethod.DELETE)
	public void deleteVehicule(HttpServletRequest request){
		String name = request.getParameter("name");
		System.out.println("removed : " + name);
		vehicules.remove(name);
	}
	
	
	
}
