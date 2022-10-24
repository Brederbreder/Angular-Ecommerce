package com.luv2code.ecommerce.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.luv2code.ecommerce.entity.State;


@RepositoryRestResource

public interface StateRepository extends JpaRepository<State, Integer> {
    Set<State> findByCountryCode(@Param("code") String code);
}
