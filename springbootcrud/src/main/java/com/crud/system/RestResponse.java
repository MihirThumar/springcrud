package com.crud.system;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class RestResponse {

	private int code;
	private boolean status;
	private String message;
	private Object data;

}